// Use Case1: Guard Clauses (forces you to check all posibile cases)
type CurrencyOptions = "EURO" | "USD" | "AZN";

function getRate(currency: CurrencyOptions) {
  switch (currency) {
    case "EURO":
      return 1.8;
    case "USD":
      return 1.7;
    case "AZN":
      return 1.2;
    default:
      const _unreachable: never = currency; // will get Type Error if you remove one of the cases
      throw "Not found";
  }
}

// Use Case2: function will Throw error
function throwError(errorMsg: string): void {
  throw new Error(errorMsg);
}

// Use Case3: function will Never end
function keepProcessing(): never {
  while (true) console.log("Never ends.");
}

/*


Nazar Pashazade
Latvia, Riga, Vaidavas-8, LV-1084 | +37129377576 | pashazade.nazar@gmail.com

Dear Hiring Manager,

I am excited to apply for this position you recently posted. Having read through the job requirements, 
I believe that my skillset and experience match well with your needs. I have included my resume for 
your review.

I am skilled NodeJS Developer with more than 4 years of experience in the industry. Highly adept at 
handling various responsibilities by prioritizing my tasks, establishing clear deadlines and finding 
creative solutions to eliminate obstacles. My experience has equipped me with the necessary tools 
to succeed in this position:


While I am grateful for the opportunities afforded to me in my prior position, I am ready to embark on 
a new career path that offers new challenges for me to put my skills to use.
Please take a look at my enclosed resume for more details about my work experience and 
qualifications. I'd really like to speak with you more about the position, and I look forward to hearing 
from you soon.

Sincerely,
Nazar Pashazade


*/
