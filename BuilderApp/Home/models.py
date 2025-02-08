from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    password = models.CharField(max_length=100,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name