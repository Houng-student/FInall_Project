import uuid
from flask import Flask, request, jsonify
from khqr import KHQR  # or your installed khqr module

app = Flask(__name__)

@app.route('/api/generate-qr', methods=['POST'])
def generate_qr():
    try:
        data = request.get_json()

        if not data or 'amount' not in data or 'currency' not in data:
            return jsonify({'error': 'Missing required fields: amount and currency'}), 400

        amount = float(data['amount'])
        currency = data['currency']
        description = data.get('description', 'Payment')

        # Generate unique bill number
        bill_number = uuid.uuid4().hex[:12]

        # Initialize KHQR instance if needed, then create QR
        # Ensure you use '=' instead of ':' inside the function call
        qr_data = khqr.create_qr(
            account_id="2120592",
            merchant_name="Ihoung Chun",
            merchant_city="Phnom Penh",
            amount=amount,
            currency=currency,
            store_label="IRCT SHOP",
            phone_number="0969272937",
            bill_number=bill_number,
            terminal_label="WebQR"
        )

        return jsonify({
            'success': True,
            'qr_code': qr_data,
            'bill_number': bill_number
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500