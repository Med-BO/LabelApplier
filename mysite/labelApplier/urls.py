from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    path('allLabels/', views.getData),
    path('post/',views.postData),
    path('delete/<str:label_name>/', views.deleteData, name='delete_data'),
]