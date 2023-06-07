from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# To create a model, simply create a class.
# models.Model will turn our class into a model.
# if user is deleted, don't remove child elements (e.g if user creates products, is removed from db, don't remove the products that user added)
# null= false, allowing this attribute to be empty in the database
# blank= True, we can fill out a form and not have this field be required
class Product(models.Model): 
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    #image = 
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)