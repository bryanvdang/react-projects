# this file is in charge of connecting the views to the URLs.

from django.urls import path
from . import views

#list of urls
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
]