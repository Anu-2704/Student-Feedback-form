from flask import Flask, render_template, request

app = Flask(__name__)

# Submitted feedback temporarily store karne ke liye
feedback_list = []


@app.route("/", methods=["GET", "POST"])
def home():

    if request.method == "POST":

        name = request.form.get("name")
        rollno = request.form.get("rollno")
        email = request.form.get("email")
        course = request.form.get("course")
        feedback = request.form.get("feedback")

        # Feedback ko list mein store karna
        feedback_list.append({
            "name": name,
            "rollno": rollno,
            "email": email,
            "course": course,
            "feedback": feedback
        })

    return render_template(
        "index.html",
        feedbacks=feedback_list
    )


if __name__ == "__main__":
    app.run(debug=True)