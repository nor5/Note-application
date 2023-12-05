from django.http import response
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Note
from .serializers import NoteSerializer

# Create your views here.


def getNotesList(request):
    notes = Note.objects.all().order_by("-updated")
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


def getNoteDetails(request, pk):
    try:
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data)
    except:
        return Response(f"Note {pk} does not exist")


def createNote(request):
    data = request.data
    if "title" in data and data["title"]:
        title = data["title"]
    else:
        title = None
        print(title)
    note = Note.objects.create(title=title, body=data["body"])
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


def updateNote(request, pk):
    try:
        data = request.data
        note = Note.objects.get(id=pk)
        serializer = NoteSerializer(instance=note, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    except:
        return Response(f"Note {pk} does not exist ")


def deleteNote(request, pk):
    try:
        note = Note.objects.get(id=pk)
        note.delete()
        return Response("Note was deleted")
    except:
        return Response(f"Note {pk} does not exist ")
