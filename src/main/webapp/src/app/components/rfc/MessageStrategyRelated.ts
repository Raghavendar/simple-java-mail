import {Email} from "./Email";
import {MessageStrategy} from "./MessageStrategy";

export class MessageStrategyRelated extends MessageStrategy {
  compatibleWithEmail(email: Email): boolean {
		return !MessageStrategy.emailContainsMixedContent(email) &&
      MessageStrategy.emailContainsRelatedContent(email) &&
      !MessageStrategy.emailContainsAlternativeContent(email);
	}
  
  public determineMessageStructure(email: Email): string {
    return "<ul>" +
      "  <li class=\"indent\">related (root)" +
      "     <ul>" +
      "     <li class=\"indent\">HTML text</li>" +
      "     <li class=\"indent\">embeddable content (ie. images)</li>" +
      "     </ul>" +
      "   </li>" +
      "</ul>";
  }
}
