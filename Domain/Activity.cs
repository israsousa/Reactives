using System;

namespace Domain
{
    public class Activity
    {
        public Guid id {get; set;}
        public  string Title {get; set;}
        public  string Description {get; set;}
        public  string Category {get; set;}
        public  string City {get; set;}
        public  DateTime Date {get; set;}
        public  string Venue {get; set;}
    }
}