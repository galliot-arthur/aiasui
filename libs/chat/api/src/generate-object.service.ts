import { JSONParseError, TypeValidationError, generateObject } from "ai";
import {
  ConvertibleMessage,
  GENERATE_OBJECT_PARSE_ERROR,
  GENERATE_OBJECT_SUCCESS,
  GENERATE_OBJECT_UNKNOWN_ERROR,
  GENERATE_OBJECT_VALIDATION_ERROR,
  GenerateObjectErrorResponse,
  GenerateObjectSuccessResponse,
} from "@/libs/chat/domain";
import { Schema } from "zod";
import { Err, Ok, Result } from "ts-results";
import { ollama } from "ollama-ai-provider";

export class GenerateObjectService {
  async generateObject<T extends {}>(
    messages: ConvertibleMessage[],
    schema: Schema<T>
  ): Promise<
    Result<GenerateObjectSuccessResponse<T>, GenerateObjectErrorResponse>
  > {
    try {
      const result = await generateObject({
        model: ollama("llama3"),
        schema: schema,
        messages: messages,
      });

      return Ok({ type: GENERATE_OBJECT_SUCCESS, object: result.object });
    } catch (error) {
      return Err(this.handleError(error));
    }
  }

  private handleError(error: unknown): GenerateObjectErrorResponse {
    if (TypeValidationError.isInstance(error)) {
      return { type: GENERATE_OBJECT_VALIDATION_ERROR, value: error.value };
    }
    if (JSONParseError.isInstance(error)) {
      return { type: GENERATE_OBJECT_PARSE_ERROR, text: error.text };
    }
    return { type: GENERATE_OBJECT_UNKNOWN_ERROR, error };
  }
}
