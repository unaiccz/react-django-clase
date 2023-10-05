from django.db import models

# Create your models here.
class Examen(models.Model):
    asignature = models.CharField(max_length=90)
    date = models.TextField(max_length=11)
    def __str__(self) -> str:
        return self.asignature