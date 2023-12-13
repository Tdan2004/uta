
$(document).ready(function() {
    var form = $("#share-form");
    var courses = [];
    form.submit(function(event) {
        event.preventDefault();
        handleFormData(event);
    });
    function handleFormData(event) {
        var formData = new FormData(event.target);
        var course = {
            title: formData.get("course-title"),
            image: formData.get("course-image"),
            teacher: formData.get("course-teacher"),
            duration: formData.get("course-duration"),
            fee: formData.get("course-fee"),
            description: formData.get("course-description")
        };
        courses.push(course);
        displayCourses();
    }
    function displayCourses() {
        var container = $("#courses-container");
        container.empty();
        for (var i = 0; i < courses.length; i++) {
            var course = courses[i];
            var card = $("<div></div>").addClass("card mb-4");
            var image = $("<img>").attr("src", course.image).addClass("card-img-top").attr("alt", "Hình ảnh khóa học");
            var body = $("<div></div>").addClass("card-body");
            var title = $("<h5></h5>").text(course.title).addClass("card-title");
            var teacher = $("<p></p>").text("Giáo viên: " + course.teacher).addClass("card-text");
            var duration = $("<p></p>").text("Thời lượng: " + course.duration + " buổi").addClass("card-text");
            var fee = $("<p></p>").text("Học phí: " + course.fee + " đồng").addClass("card-text");
            var description = $("<p></p>").text(course.description).addClass("card-text");
            var button = $("<a></a>").text("Đăng ký").addClass("btn btn-success");
            body.append(title, teacher, duration, fee, description, button);
            card.append(image, body);
            container.append(card);
        }
    }
});
