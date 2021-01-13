// ************** add butt0n **************** \\
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", () => {
  let form = document.getElementById("gpaForm");

  // ******************* DOM Node creation *********************** \\
  // *************************************************************** \\
  //creates li
  let list = document.createElement("li");
  list.className = "gpa__form-list";

  // course title label
  let courseTitleLabel = document.createElement("label");
  courseTitleLabel.className = "gpa__form-listLabel";
  courseTitleLabel.innerText = "Course Title";

  // course title input
  let courseTitleInput = document.createElement("input");
  courseTitleInput.className = "gpa__form-listInput";

  // course code label
  let courseCodeLabel = document.createElement("label");
  courseCodeLabel.className = "gpa__form-listLabel";
  courseCodeLabel.innerText = "Course Code";

  // course code input
  let courseCodeInput = document.createElement("input");
  courseCodeInput.className = "gpa__form-listInput";

  // exam grade label
  let examGradeLabel = document.createElement("label");
  examGradeLabel.className = "gpa__form-listLabel";
  examGradeLabel.innerText = "Exam Grade";

  // exam grade selection
  let examGradeSelection = document.createElement("select");
  examGradeSelection.className = "gpa__form-listSelect";
  // grade A1
  let examGradeOptionsA1 = document.createElement("option");
  examGradeOptionsA1.append("A1");
  examGradeOptionsA1.setAttribute("data-grade", 4.0);
  examGradeSelection.append(examGradeOptionsA1);
  // grade A2
  let examGradeOptionsA2 = document.createElement("option");
  examGradeOptionsA2.append("A2");
  examGradeOptionsA2.setAttribute("data-grade", 3.5);
  examGradeSelection.append(examGradeOptionsA2);
  // grade B1
  let examGradeOptionsB1 = document.createElement("option");
  examGradeOptionsB1.append("B1");
  examGradeOptionsB1.setAttribute("data-grade", 3.25);
  examGradeSelection.append(examGradeOptionsB1);
  // grade B2
  let examGradeOptionsB2 = document.createElement("option");
  examGradeOptionsB2.append("B2");
  examGradeOptionsB2.setAttribute("data-grade", 3.0);
  examGradeSelection.append(examGradeOptionsB2);
  // grade C1
  let examGradeOptionsC1 = document.createElement("option");
  examGradeOptionsC1.append("C1");
  examGradeOptionsC1.setAttribute("data-grade", 2.75);
  examGradeSelection.append(examGradeOptionsC1);
  // grade C2
  let examGradeOptionsC2 = document.createElement("option");
  examGradeOptionsC2.append("C2");
  examGradeOptionsC2.setAttribute("data-grade", 2.5);
  examGradeSelection.append(examGradeOptionsC2);
  // grade D1
  let examGradeOptionsD1 = document.createElement("option");
  examGradeOptionsD1.append("D1");
  examGradeOptionsD1.setAttribute("data-grade", 2.25);
  examGradeSelection.append(examGradeOptionsD1);
  // grade D2
  let examGradeOptionsD2 = document.createElement("option");
  examGradeOptionsD2.append("D2");
  examGradeOptionsD2.setAttribute("data-grade", 2.0);
  examGradeSelection.append(examGradeOptionsD2);
  // grade F
  let examGradeOptionsF = document.createElement("option");
  examGradeOptionsF.append("F");
  examGradeOptionsF.setAttribute("data-grade", 0.0);
  examGradeSelection.append(examGradeOptionsF);
  // course unit label
  let courseUnitLabel = document.createElement("label");
  courseUnitLabel.className = "gpa__form-listLabel";
  courseUnitLabel.innerText = "Course Unit";
  //********** course unit selection
  let courseUnitSelection = document.createElement("select");
  courseUnitSelection.className = "gpa__form-listSelect";
  // option one
  let courseUnitOptions = document.createElement("option");
  courseUnitOptions.append(1);
  courseUnitOptions.setAttribute("data-unit", 1);
  courseUnitSelection.append(courseUnitOptions);
  // option two
  let courseUnitOptions2 = document.createElement("option");
  courseUnitOptions2.append(2);
  courseUnitOptions2.setAttribute("data-unit", 2);
  courseUnitSelection.append(courseUnitOptions2);
  // option three
  let courseUnitOptions3 = document.createElement("option");
  courseUnitOptions3.append(3);
  courseUnitOptions3.setAttribute("data-unit", 3);
  courseUnitSelection.append(courseUnitOptions3);
  // option four
  let courseUnitOptions4 = document.createElement("option");
  courseUnitOptions4.append(4);
  courseUnitOptions4.setAttribute("data-unit", 4);
  courseUnitSelection.append(courseUnitOptions4);
  // option five
  let courseUnitOptions5 = document.createElement("option");
  courseUnitOptions5.append(5);
  courseUnitOptions5.setAttribute("data-unit", 5);
  courseUnitSelection.append(courseUnitOptions5);
  // option six
  let courseUnitOptions6 = document.createElement("option");
  courseUnitOptions6.append(6);
  courseUnitOptions6.setAttribute("data-unit", 6);
  courseUnitSelection.append(courseUnitOptions6);

  // ******************* Appending to the DOM *********************** \\
  // ******************************************************************* \\
  list.append(courseTitleLabel);
  list.append(courseTitleInput);
  list.append(courseCodeLabel);
  list.append(courseCodeInput);
  list.append(examGradeLabel);
  list.append(examGradeSelection);
  list.append(courseUnitLabel);
  list.append(courseUnitSelection);

  form.append(list);
});

// ************** delete button **************** \\
const delBtn = document.getElementById("del");
delBtn.addEventListener("click", (e) => {
  const form = e.target.parentElement.previousElementSibling;
  form.removeChild(form.lastChild);
});

// ************** calculate GP **************** \\
const gpaBtn = document.getElementById("gpa");
gpaBtn.addEventListener("click", () => {
  let gradeSelect = document.querySelector("[data-grade='4.00']").value
  // let examGrade = gradeSelect.getAttribute("data-grade");
  // console.log(examGrade);

  console.log(gradeSelect);
});

// ************** calculate CGPA **************** \\
const cgpaBtn = document.getElementById("cgpa");
cgpaBtn.addEventListener("click", () => {
  let prevCGP = parseFloat(document.getElementById("prevGPA").value);
  let currentCGP = parseFloat(document.getElementById("currentGPA").value);
  let CGPA = (prevCGP + currentCGP) * 0.5;
  alert(parseFloat(CGPA.toFixed(2)));
});
