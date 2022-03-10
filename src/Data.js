export const subjects = [
  { id: 1, name: "Physics" },
  { id: 2, name: "Mathematics" },
  { id: 3, name: "Geography" },
  { id: 4, name: "Chemistry" },
  { id: 5, name: "History" },
  { id: 6, name: "Informatics" },
  { id: 7, name: "Biology" },
  { id: 8, name: "English" },
];

export const attendance = [
  { date: "26/03", isAttend: true, mark: "", lesson: "Lesson 20" },
  { date: "25/03", isAttend: true, mark: "", lesson: "Lesson 19" },
  { date: "24/03", isAttend: true, mark: "", lesson: "Lesson 18" },
  { date: "23/03", isAttend: true, mark: "10", lesson: "Lesson 17" },
  { date: "22/04", isAttend: false, mark: "", lesson: "Lesson 16" },
  { date: "19/04", isAttend: true, mark: "", lesson: "Lesson 15" },
  { date: "18/04", isAttend: true, mark: "", lesson: "Lesson 14" },
  { date: "17/04", isAttend: true, mark: "", lesson: "Lesson 13" },
  { date: "16/04", isAttend: true, mark: "", lesson: "Lesson 12" },
  { date: "15/04", isAttend: true, mark: "", lesson: "Lesson 11" },
  { date: "12/04", isAttend: true, mark: "", lesson: "Lesson 10" },
  { date: "11/04", isAttend: true, mark: "", lesson: "Lesson 9" },
  { date: "10/04", isAttend: true, mark: "8", lesson: "Lesson 8" },
  { date: "09/04", isAttend: true, mark: "", lesson: "Lesson 7" },
  { date: "08/04", isAttend: false, mark: "", lesson: "Lesson 6" },
  { date: "05/04", isAttend: true, mark: "", lesson: "Lesson 5" },
  { date: "04/04", isAttend: true, mark: "", lesson: "Lesson 4" },
  { date: "03/04", isAttend: false, mark: "", lesson: "Lesson 3" },
  { date: "02/04", isAttend: true, mark: "", lesson: "Lesson 2" },
  { date: "01/04", isAttend: true, mark: "", lesson: "Lesson 1" },
];

export const examResults = [
  { id: 1, name: "Physics", credit: 6, semPoint: 49, examPoint: 48, totalPoint: 97 },
  { id: 2, name: "Mathematics", credit: 8, semPoint: 48, examPoint: 43, totalPoint: 91 },
  { id: 3, name: "Geography", credit: 2, semPoint: 50, examPoint: 46, totalPoint: 96 },
  { id: 4, name: "Chemistry", credit: 6, semPoint: 43, examPoint: 40, totalPoint: 83 },
  { id: 5, name: "History", credit: 6, semPoint: 45, examPoint: 50, totalPoint: 95 },
  { id: 6, name: "Informatics", credit: 3, semPoint: 50, examPoint: 50, totalPoint: 100 },
  { id: 7, name: "Biology", credit: 5, semPoint: 44, examPoint: 48, totalPoint: 92 },
  { id: 8, name: "English", credit: 6, semPoint: 48, examPoint: 46, totalPoint: 94 },
];

export const resources = [
  {
    id: 1,
    name: "Mathematics for Machine Learning",
    url: "https://drive.google.com/uc?export=download&id=1GNYEZ0vkWaK-SKQHJXfqDt8987jO6mzO",
  },
  {
    id: 2,
    name: "The Maths E-Book of Notes and Examples",
    url: "https://drive.google.com/uc?export=download&id=1YuoB9nHmfA3JqQKYJ_J2Yqj0afm1WX-5",
  },
  {
    id: 3,
    name: "Mathematics",
    url: "https://drive.google.com/uc?export=download&id=1HzBkSHBSRPvccsKxH94fzK455AffiKfq",
  },
  {
    id: 4,
    name: "Advanced Problems in Mathematics",
    url: "https://drive.google.com/uc?export=download&id=1tM1kBeQvBKN0c9BDeRdYUWnS0wZf1waV",
  },
];

export const notifications = [
  {
    id: 1,
    date: "February 18, 13:30",
    from: "Mathematics teacher",
    type: "task",
    name: "Sum of numbers task 1",
  },
  {
    id: 2,
    date: "February 17, 11:52",
    from: "Geography teacher",
    type: "task",
    name: "Oceans task 1",
  },
  {
    id: 3,
    date: "February 16, 08:49",
    from: "English teacher",
    type: "book",
    name: "Vocabulary-2",
  },
  {
    id: 4,
    date: "February 15, 22:14",
    from: "Chemist teacher",
    type: "task",
    name: "Molecules",
  },
];

export const personalInfo = {
    name: "Alexis Marrow",
    gender: "male",
    studentId: "782615",
    course: "2",
    group: "M0582",
    university: "Boston University",
    faculty: "Information security",
    photoUrl: "https://media.istockphoto.com/photos/portrait-of-black-guy-in-high-school-class-picture-id1278978168?k=20&m=1278978168&s=170667a&w=0&h=5W8xCUDb57fhT9fwLTOUljFkJvgra_mufgHto8kxFu8=",
};

export const timetableData = [
  {
    hours: "14:00-15:20",
    monday: "Physics",
    tuesday: "Mathematics",
    wednesday: "Geography",
    thursday: "Chemistry",
    friday: "English",
  },
  {
    hours: "15:30-16:50",
    monday: "Geography",
    tuesday: "Chemistry",
    wednesday: "Physics",
    thursday: "History",
    friday: "Informatics",
  },
  {
    hours: "17:10-18:30",
    monday: "Informatics",
    tuesday: "History",
    wednesday: "Mathematics",
    thursday: "English",
    friday: "Biology",
  },
];