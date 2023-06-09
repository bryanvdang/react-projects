from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .products import products
from .serializer import ProductSerializer
# Create your views here.

#function based views to show all the logic here vs class based views you can't and its a little bit more expert level

#TODO, update routes
@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')

# Call to get products on initial page load
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all(); #returns all products from our database
    serializer = ProductSerializer(products, many=True) #many=True, are we serializing one object or multiple. In this case, its multiple
    return Response(serializer.data)

# Call to get individial product data
@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False) #many=False, only return one item, not multiple
    return Response(serializer.data)