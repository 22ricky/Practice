import 'package:flutter/material.dart';

class Product {
  final String title; // 商品标题
  final String description; // 商品描述
  Product(this.title, this.description);
}

void main() {
  runApp(MaterialApp(
    title: 'Route',
    home: ProductList(
      products: List.generate(20, (i) => Product('商品 ${i + 1}', '这是一个商品详情，编号为：0${i + 1}'))
    ),
  ));
}

class ProductList extends StatelessWidget {
  final List<Product> products;
  ProductList({Key key, @required this.products}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('商品列表'),
      ),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(products[index].title),
            onTap: () {
              Navigator.push(context, MaterialPageRoute(
                builder: (context) => ProductDetail(product: products[index])
              ));
            },
          );
        }
      ),
    );
  }
}

class ProductDetail extends StatelessWidget {
  final Product product;
  ProductDetail({Key key, @required this.product}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(product.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center, // default
          children: <Widget>[
            Text(product.description),
            RaisedButton(
              child: Text('返回'),
              onPressed: () {
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }
}