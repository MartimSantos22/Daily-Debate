from django.contrib.auth.models import User

users = ["Maria", "Ana", "Rui", "Rita", "Joao", "Ines"]

def create_sample_users():
    for name in users:
        email = name.lower() + "@iscte.pt"
        password = "12345"
        User.objects.create_user(username=name, email=email, password=password)

create_sample_users()
