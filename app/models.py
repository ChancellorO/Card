from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    city = models.CharField(max_length=30, null=True)
    state = models.CharField(max_length=30, null=True)
    gender = models.CharField(max_length=10, null=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)



