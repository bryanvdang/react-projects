from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product #model we're going to serialize
        fields = '__all__' #fields we want to render out, in this case we're rendering all of it
