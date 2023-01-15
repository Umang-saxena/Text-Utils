# I Have Created this File--Umang Saxena
from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request,'index.html')
    # return HttpResponse("This is my Home Page")

def about(request):
    return HttpResponse("This is Abouts Page")


# This Function is used to print text entered in text area to terminal
def analyse(request):
    upcomingtext=request.POST.get('text','default')
    # print(upcomingtext)
    removepunc=request.POST.get('removepunc','off')
    uppercase=request.POST.get('uppercase','off')
    lowercase=request.POST.get('lowercase','off')
    # print(removepunc)
    if (removepunc == "on"):
        punctuations ='''!()-[]{};:'"\,<>./?@#$%^&*_~'''
        analysed=""
        for char in upcomingtext:
            if (char not in punctuations):
                analysed+=char
        params={
            'purpose':'Remove Punctuations',
            'analysed_text':analysed
        }
        return render(request,'analyse.html',params)
    elif (uppercase=="on"):
        analysed=""
        for char in upcomingtext:
            analysed+=char.upper()
        params={
            'purpose':'UpperCase',
            'analysed_text':analysed
        }
        return render(request,'analyse.html',params)
    elif (lowercase=="on"):
        analysed=""
        for char in upcomingtext:
            analysed+=char.lower()
        params={
            'purpose':'LowerCase',
            'analysed_text':analysed
        }
        return render(request,'analyse.html',params)

    else:
        return HttpResponse ("Error")