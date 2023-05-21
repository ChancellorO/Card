from django.shortcuts import render, redirect
from .forms import ProfileCreation

def login_page(request):
    return render(request, 'login.html')

def signup_page(request):
    if request.method == 'POST':
        form = ProfileCreation(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('login')
        else:
            return redirect('404')
    else:
        form = ProfileCreation()
        context = {
            'form': form,
        }
        return render(request, 'signup.html', context)

    

