let verbs: string[], nouns: string[], adjectives: string[], adverbs: string[], preposition: string[];
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

export class Utils {
  /**
   * @param length length of the string to be
   * @description used to generate number of characters by th given length
   */
  public getRandomString(length: number) {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let result = " ";
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  public getRandomsentence() {
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    var rand4 = Math.floor(Math.random() * 10);
    var rand5 = Math.floor(Math.random() * 10);
    var rand6 = Math.floor(Math.random() * 10);
    var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
    return content
  };

  public getTimeStamp() {
    var d = new Date();
    var timeStamp = d.getTime();
    return timeStamp;
  }
  public getRandomEmail() {
    var uniqueValue = this.getTimeStamp().toString();
    var randomEmail = "revtek" + uniqueValue + "@mailinator.com";
    console.log(randomEmail);
    return randomEmail;
  }
  public getRandomEmailYopmail() {
    //var randomEmail = (this.getRandomProfileName() + "@yopmail.com");
    var uniqueValue = this.getTimeStamp().toString();
    var randomEmail = "revtek" + uniqueValue + "@yopmail.com";
    console.log(randomEmail);
    return randomEmail;
  }

  public setMaxTime() {
    return 30000;
  }
  public getRandomNumber(size: number) {
    return Math.floor(Math.random() * size);
  }

  public getRandomNumberFromRange(start: number, end: number) {
    return Math.ceil(start - 1 + Math.random() * (end - start + 1));
  }

  /*public getRandomNumberFromRange (min:number, max:number) {
          return Math.ceil(max - 1 + (Math.random() * (max - min + 1)));
      }*/

  public getRandomMobileNumber(length: number) {
    return Math.floor(
      Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
    );
  }
  public getRandomProfileNamewithspecialcharcter() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = this.getTimeStamp().toString();
    var randomProfileNamewithspecialcharcter = stringValue + uniqueValue;
    return randomProfileNamewithspecialcharcter;
  }

  public getRandomProfileName() {
    var stringValue1 = this.getRandomString(5);
    var stringValue2 = this.getRandomString(3);
    var uniqueValue = this.getTimeStamp().toString();
    var randomProfileName = "Profile" + uniqueValue + stringValue2;
    return randomProfileName;
  }
  public getRandomName() {
    var stringValue = this.getRandomString(7);
    var uniqueValue = "Org";
    var randomoAliasname = uniqueValue + stringValue;
    return randomoAliasname;
  }
}
