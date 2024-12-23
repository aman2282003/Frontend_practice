sentenceBuilder = {
  subject: "The cat",
  verb: "is running",
  object: "on the roof",

  // Method to update a property dynamically
  updateProperty(property, value) {
    if (this.hasOwnProperty(property)) {
      this[property] = value; // Update the property
      console.log(`${property} updated to: ${value}`);
    } else {
      console.log("Invalid property");
    }
  },

  buildSentence() {
    // Check if any property is missing or empty
    if (!this.subject || !this.verb || !this.object) {
      console.log("Incomplete sentence");
    }
    // Return the complete sentence
    console.log(`${this.subject} ${this.verb} ${this.object}`);
  },
};


sentenceBuilder.updateProperty("verb", "am learning");
sentenceBuilder.buildSentence();


