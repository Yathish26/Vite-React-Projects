from django.db import models

class Contacts(models.Model):
    contact_name = models.CharField(max_length=50)
    contact_number = models.IntegerField() 
    def __str__(self):
        return self.contact_name
