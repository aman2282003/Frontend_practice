let profile = {
  name: " aman",
  age: 54,
  address: {
    city: "ludhiana",
    zipCode: 141007,
  },
};

let updates = {
  age: 12,
  address: {
    zipCode: 141008,
    country: "India",
  },
};

const mergedProfile = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address,
  },
};


console.log(mergedProfile)




