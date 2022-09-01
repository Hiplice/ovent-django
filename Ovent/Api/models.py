from django.db import models


class Item(models.Model):
    heading = models.CharField(max_length=128)
    description = models.TextField()

    params = models.TextField()
    image = models.CharField(max_length=256)


class SubItem(models.Model):
    item = models.ManyToManyField(Item)

    params = models.TextField()
    image = models.CharField(max_length=256)