from django.db import models

# Create your models here.

class Notes(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(default="Enter your note here...")
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

def __str__(self):
    return self.title
