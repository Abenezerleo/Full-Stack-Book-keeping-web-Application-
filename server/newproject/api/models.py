from django.db import models # type: ignore

class Book(models.Model):
    title = models.CharField(max_length=50)
    release_year = models.IntegerField()
    

    def __str__(self):
        return self.title