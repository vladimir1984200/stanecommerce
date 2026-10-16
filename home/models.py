from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField
    photoProd = models.ImageField(
                                      upload_to='photoProd',
                                      blank=True
                                 )

    def __str__(self):
        return
 