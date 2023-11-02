from django.db import models


class Label(models.Model):
    label_name = models.CharField(max_length=50)
    label_color = models.CharField(max_length=7) # hex color code