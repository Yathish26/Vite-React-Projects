from django.db import models

class CreateBlog(models.Model):
    blog_title = models.CharField(max_length=50)
    blog_category = models.CharField(max_length=50)
    blog_content = models.CharField(max_length=5000)
    
    
    def __str__(self):
        return self.title