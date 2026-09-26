from django.db import models

class Salas(models.Model):
    numero = models.CharField(max_length=20, verbose_name="Número/Nome")
    status = models.BooleanField(default=False, verbose_name="Status da Sala")
    
    class Meta:
        verbose_name = "Sala"
        verbose_name_plural = "Salas"

    def __str__(self):
        return f"Sala {self.numero}"