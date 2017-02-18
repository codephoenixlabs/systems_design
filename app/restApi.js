module.exports = {
    url: function () {
        var core = '/api'

        var module = {
            student: '/student',
            thesis: '/thesis'
        }
        return {
            GetStudentbyIdApi: core + module.student + '/GetStudentById',
            GetThesisbyIdApi: core + module.thesis + '/GetThesisbyId'
        }
    }
}