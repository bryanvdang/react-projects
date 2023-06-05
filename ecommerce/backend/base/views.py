from django.shortcuts import render
from django.http import JsonResponse
from .products import products
# Create your views here.

#function based views to show all the logic here vs class based views you can't and its a little bit more expert level

def getRoutes(request):
    return JsonResponse('Hello', safe=False)

def getProducts(request):
    return JsonResponse(products, safe=False)
#configure URLs for views
