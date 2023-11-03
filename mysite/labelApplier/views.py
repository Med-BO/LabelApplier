from django.shortcuts import render
from rest_framework.response import Response
from .models import Label
from rest_framework.decorators import api_view
from .serializer import DataSerializer
from rest_framework import status

# Create your views here.
@api_view(['GET'])
def getData(request):
    app = Label.objects.all()
    serializer = DataSerializer(app, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postData(request):
    serializer = DataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    
@api_view(['DELETE'])
def deleteData(request, label_name):
    if label_name is not None:
        try:
            data_instance = Label.objects.get(label_name=label_name)
        except Label.DoesNotExist:
            return Response({"error": "Data not found"}, status=status.HTTP_404_NOT_FOUND)
        data_instance.delete()
        return Response({"message": f"Data with label_name '{label_name}' deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
    else:
        return Response({"error": "label_name parameter is required to delete data"}, status=status.HTTP_400_BAD_REQUEST)