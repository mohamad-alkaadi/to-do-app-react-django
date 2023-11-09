from django.shortcuts import render
from rest_framework import viewsets
from . import serializers
from . import models
# Create your views here.

class NotesViewSet(viewsets.ModelViewSet):
    queryset = models.Notes.objects.all()
    serializer_class = serializers.NoteSerializer