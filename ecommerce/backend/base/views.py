from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products

# Create your views here.

#function based views to show all the logic here vs class based views you can't and its a little bit more expert level

@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')

@api_view(['GET'])
def getProducts(request):
    return Response(products)
#configure URLs for views
