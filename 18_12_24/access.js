

function checkAccess(obj) {
  if (obj.role == "admin") {
    if (obj.active && obj.experience > 5 && obj.department == "IT") {
      return "Full IT Admin Access";
    } else if (obj.active && obj.experience > 5) {
      return "Full General Admin Access";
    } else if (obj.active && obj.experience <= 5) {
      return "Limited Admin Access";
    } else {
      return "Admin Access Revoked";
    }
  }

  if (obj.role == "manager") {
    if (obj.active && obj.experience > 3 && obj.department == "sales") {
      return "Full Sales Manager Access";
    } else if (obj.active && obj.experience > 3) {
      return "Full Manager Access";
    } else if (obj.active && obj.experience <= 3) {
      return "Limited Manager Access";
    } else {
      return "Manager Access Revoked";
    }
  } else if (obj.role == "user") {
    if (obj.active && obj.department == "Support") {
      return "Priority Support Access";
    } else if (obj.active) {
      return "User Access";
    } else {
      return "User Access Revoked";
    }
  } else {
    return "Invalid Role";
  }
}



let person = {
  role: "user",
  experience: 2,
  active: true,
  department: "Support",
};




console.log(checkAccess(person))




// With ternery operator


function checkAccess(obj) {
  return obj.role === "admin"
    ? obj.active && obj.experience > 5 && obj.department === "IT"
      ? "Full IT Admin Access"
      : obj.active && obj.experience > 5
      ? "Full General Admin Access"
      : obj.active && obj.experience <= 5
      ? "Limited Admin Access"
      : "Admin Access Revoked"
    : obj.role === "manager"
    ? obj.active && obj.experience > 3 && obj.department === "sales"
      ? "Full Sales Manager Access"
      : obj.active && obj.experience > 3
      ? "Full Manager Access"
      : obj.active && obj.experience <= 3
      ? "Limited Manager Access"
      : "Manager Access Revoked"
    : obj.role === "user"
    ? obj.active && obj.department === "Support"
      ? "Priority Support Access"
      : obj.active
      ? "User Access"
      : "User Access Revoked"
    : "Invalid Role";
}

let person2 = {
  role: "user",
  experience: 2,
  active: true,
  department: "Support",
};

console.log(checkAccess(person2));
