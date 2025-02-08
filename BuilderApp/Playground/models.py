from django.db import models

class Data(models.Model):
    def __init__(self):
        self.type = models.CharField(max_length=100)
        self.name = models.CharField(max_length=100)
        self.static = models.JSONField()
        self.static_files = models.FilePathField()
    def __str__(self):
        return self.name