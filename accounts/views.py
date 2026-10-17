from django.shortcuts import render,redirect
from django.contrib.auth import login, logout,authenticate
from django.contrib.auth.models import User
from django.urls import reverse


def logoutView(request):
    logout(request)
    return redirect(reverse('home'))

def loginView(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(username=username,email=email,password=password)
        if user != None:
            login(request,user)
            return redirect(reverse('home'))
        else:
            return render(request,'errorsUser/loginError.html')

def registerView(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        if password1 != password2:
            return render(request,'errorsUser/equalPasswordError.html')
        else:
            user = authenticate(username=username,email=email,password=password1)
            if user != None:
                return render(request,'errorsUser/existsUserError.html')
            else:
                user = User.objects.create_user(username=username,email=email,password=password1)
                login(request,user)
                return redirect(reverse('home'))

                

