# Generated by Django 4.2.1 on 2023-10-05 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_examen_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='examen',
            name='date',
            field=models.TextField(max_length=9),
        ),
    ]
