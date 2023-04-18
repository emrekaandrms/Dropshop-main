namespace API.Entities
{
    public class Product

    {
        public int ID { get; set; }
        public string Name{ get; set; }
        public string Description { get; set;}
        public long Price { get; set; }
        public string PictureUrl { get; set; }
        public string Type { get; set; }
        public string Brand { get; set; }
        public int QtyStock { get; set; }

    }
}