from django.db import models

class Sala(models.Model):
    numero = models.CharField(max_length=20, verbose_name="Número/Nome")
    status = models.BooleanField(default=False, verbose_name="Status da Sala")

    def __str__(self):
        return f"Sala {self.numero}"