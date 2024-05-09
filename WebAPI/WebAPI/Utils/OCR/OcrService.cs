
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;

namespace WebAPI.Utils.OCR
{
    public class OcrService
    {

        private readonly string subscriptionKey = "5e4435933eb049a081eb2c96aedd4ba9";

        private readonly string endpoint = "https://vhgrupo8-computervision.cognitiveservices.azure.com/";

        public async Task<string> RecognizeTextAsync(Stream imageStream)
        {
            try
            {
                var client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(subscriptionKey))
                {
                    Endpoint = endpoint
                };

                var ocrResult = await client.RecognizePrintedTextInStreamAsync(true, imageStream);

                return ProcessRecognitionResult(ocrResult);
            }
            catch (Exception ex)
            {
                return "Erro ao recohecer o texto!" + ex.Message;
            }
        }

        private static string ProcessRecognitionResult(OcrResult result)
        {
            try
            {
                string recognizedText = "";

                // Percorrer cada bloco ( Regions ), linha ( Lines ) e letra ( Words ), organizar e extrair as palavras lidas ( 3 Foreachs para cada um ):
                foreach (var region in result.Regions)
                {
                    foreach (var line in region.Lines)
                    {
                        foreach (var word in line.Words)
                        {
                            // Operador de incremento = "+=".
                            // " " = Espaçar os elementos.
                            recognizedText += word.Text + " ";
                        }

                        // Quebrar linha.
                        recognizedText += "\n";
                    }
                }
                return recognizedText;

            }
            catch (Exception ex)
            {
                return "Erro" + ex.Message;
            }
        }
    }
}
