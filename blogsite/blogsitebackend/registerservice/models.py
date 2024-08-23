from django.db import models


class RegisterServiceModel(models.Model):
    full_name = models.CharField(max_length=50)
    mobile_number = models.IntegerField()
    work_category = models.CharField(max_length=50)
    
    
    def __str__(self):
        return self.full_name
