export const students = [
  {
    uid: "1001",
    password: "123",
    name: "Anand Suthar",
    email: "anand880441@gmail.com",
    mobile: "8765432109",
    university: "SUxCG 714",

    avatar:
      "https://res.cloudinary.com/dpvmzqfvv/image/upload/v1770271264/AnandIMG_-_Copy_mou9hb.jpg",

    attendance: [
      {
        semester: "Semester 1",
        present: 185,
        total: 270,
        bonus: 0,
        percentLabel: 88,
        startDate: "31/07/2025",
        endDate: "28/01/2026",
        today: [
          {
            id: "SU0204",
            subject: "OOPS",
            instructor: "Ankita",
            status: "present",
          },
          {
            id: "SU0203",
            subject: "NoSQL",
            instructor: "Ankita",
            status: "present",
          },
          {
            id: "SU0201",
            subject: "ReactJS",
            instructor: "Ankita",
            status: "present",
          },
          {
            id: "SU0202",
            subject: "NodeJS",
            instructor: "Ankita",
            status: "present",
          },
        ],
      },
      {
        semester: "Semester 2",
        present: 126,
        total: 146,
        bonus: 2,
        percentLabel: 88,
        startDate: "29/01/2026",
        endDate: "30/06/2026",
        today: [
          {
            id: "SU0204",
            subject: "OOPS",
            instructor: "Ankita",
            status: "present",
          },
          {
            id: "SU0203",
            subject: "NoSQL",
            instructor: "Ankita",
            status: "present",
          },
          {
            id: "SU0201",
            subject: "ReactJS",
            instructor: "Ankita",
            status: "present",
          },
          {
            id: "SU0202",
            subject: "NodeJS",
            instructor: "Ankita",
            status: "present",
          },
        ],
      },
    ],

    subjects: [
      "SU11 - GIT & GITHUB",
      "SU12 - C Language",
      "SU13 - HTML/CSS/JS",
      "SU14 - UI/UX FIGMA",
      "SU15 - MATHS",
      "SU16 - JavaScript",
      "SU0201 - ReactJS",
      "SU0202 - NodeJS",
      "SU0203 - NoSQL",
      "SU0204 - OOPS",
      "SU0205 - Maths 2",
      "SU0206 - EVS",
      "SU0207 - IR 01",
      "SU0208 - IR 02",
    ],

    mentors: [
      {
        name: "Ankita",
        batch: "SUxCG 714",
      },
    ],

    assignments: 0,
    pendingAssignments: 0,
    events: [],
  },
];
export const loginDetails = (uid, password) => {
  const student = students.find(
    (s) => s.uid === uid && s.password === password,
  );

  if (!student) return false;

  localStorage.setItem("user", JSON.stringify(student));

  return true;
};

export const getCurrentUser = () => {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("user");
};
