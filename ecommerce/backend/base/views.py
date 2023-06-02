from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

#function based views to show all the logic here vs class based views you can't and its a little bit more expert level

def getRoutes(request):
    return JsonResponse('Hello', safe=False)

#configure URLs for views
