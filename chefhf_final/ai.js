import { InferenceClient } from "@huggingface/inference";
const hf = new InferenceClient(process.env.REACT_APP_HF_TOKEN);
//console.log(`${process.env.REACT_APP_HF_TOKEN} is the key`);

export async function getRecipe(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  const result = await hf.chatCompletion({
    model: "HuggingFaceTB/SmolLM3-3B:hf-inference",
    messages: [
      {
        role: "user",
        content: `I have ${ingredientsString}. please give recipe!`,
      },
    ],
  });

  return result.choices[0].message.content;
}
