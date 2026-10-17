from django.urls import path
from . import views

urlpatterns = [
    path('logout/', views.logoutView, name='logout'),
    path('login/', views.loginView, name='login'),
    path('register/',views.registerView, name='register')
]


