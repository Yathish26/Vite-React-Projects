from django.contrib import admin
from .models import RegisterServiceModel

class RegisterServiceAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'mobile_number', 'work_category')


admin.site.register(RegisterServiceModel)
