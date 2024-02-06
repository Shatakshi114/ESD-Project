export const api = {
  getAllDepartments: `http://localhost:9191/department/get`,
  registrationUrl: "http://localhost:9191/employee/add",
  getCourses: (id) => {
    console.log(id);
    return String(`http://localhost:9191/course_schedule/${Number(id)}/get`);
  },
};
